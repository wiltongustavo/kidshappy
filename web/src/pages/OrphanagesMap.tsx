import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import{ Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';
import { Map , TileLayer } from 'react-leaflet';



function OrphanagesMap(){
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
                </Map>
            </div>

            <Link to="" className="create-orphanage">
                    <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );
}


export default OrphanagesMap;