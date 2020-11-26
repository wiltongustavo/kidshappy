import React, { useEffect, useState}  from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import{ Link } from 'react-router-dom';
import {FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';
import { Map , TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import api from '../services/api';


interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}


function OrphanagesMap(){

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
                setOrphanages(response.data);
        });
    }, []);
    
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                        <h2>Escolha um orfanato no mapa </h2>
                        <p>Muitas Crianças Estão Esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo </strong>
                    <span>Mauá SP</span>
                </footer>
            </aside>

            <div>
                <Map 

                    center={[-23.6645737,-46.4489193]}
                    zoom={15}
                    style={{width: '100vw', height: '100vh'}}
                >
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                  
                   {orphanages.map(orphanage => {
                    
                    return(
                        <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                        </Popup>
                    </Marker>
                    )
                   })}
                </Map>
            </div>

            <Link to="/orphanages/create" className="create-orphanage">
                    <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );
}


export default OrphanagesMap;