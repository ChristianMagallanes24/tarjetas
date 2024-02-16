import React from 'react';
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import carD from "../assets/card1.png"
import carDd from "../assets/card2.png"
import carDn from "../assets/cardNormal.png"
import Footer from '../Footer/Footer';

const Modelos = () => {
  return (
    <div className='modelos-container'>
        <div className='card'>
            <img className='card-img' src={carDd} alt="a" />
            <div className='card-info'>
                <h2 className='card-title'>Tarjeta premium</h2>
                <p><span className='check'><FaCheck /></span> Diseño segun la tematica</p>
                <p><span className='check'><FaCheck /></span> confirmacion de asistencia</p>
                <p><span className='check'><FaCheck /></span> Videos y fotos</p>
                <p><span className='check'><FaCheck /></span> Fecha hora y hubicacion</p>
                <div className='card-price'>
                    <span className='price'>$2.000</span>
                    <button className='btn'>Encargar</button>
                </div>
            </div>
        </div>


        <div className='card2'>
            <img className='card-img' src={carDn} alt="a" />
            <div className='card-info'>
                <h2 className='card-title'>Tarjeta simple</h2>
                <p><span className='check'><FaCheck /></span> Diseño a tu gusto</p>
                <p><span className='checkx'><ImCross /></span> confirmacion de asistencia</p>
                <p><span className='check'><FaCheck /></span> fotos</p>
                <p><span className='check'><FaCheck /></span> Fecha hora y hubicacion</p>
                <div className='card-price'>
                    <span className='price'>$300</span>
                    <button className='btn'>Encargar</button>
                </div>
            </div>
        </div>


        <div className='card'>
            <img className='card-img' src={carD} alt="a" />
            <div className='card-info'>
                <h2 className='card-title'>Tarjeta basica</h2>
                <p><span className='check'><FaCheck /></span> Diseño segun la tematica</p>
                <p><span className='check'><FaCheck /></span> confirmacion de asistencia</p>
                <p><span className='check'><FaCheck /></span> fotos</p>
                <p><span className='check'><FaCheck /></span> Fecha hora y hubicacion</p>
                <div className='card-price'>
                    <span className='price'>$1.000</span>
                    <button className='btn'>Encargar</button>
                </div>
            </div>
        </div>
       
    </div>
    
  );
};

export default Modelos;
