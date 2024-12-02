import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

export function DartSinglePage() {
    const params = useParams();
    const id = params.dartsId;
    const[darts,setDarts] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
                axios.get(`https://darts.sulla.hu/darts/${id}`)
                .then((res) => res.data)
                .then((data) => setDarts(data))
                .catch(console.log)
                .finally(() => {
                    setPending(false);
                });   
            } 
, [id]);    
 

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || !darts.id ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                                <h5 className="card-title">Sakkozó neve: {darts.name}</h5>
                                <div className="lead">Születési dátuma: {darts.birth_date}</div>
                                <div className="lead">Nyert világbajnokságok: {darts.world_ch_won}</div> <br />
                                <div><NavLink className={"btn btn-success"} to={darts.profile_url}  target="_blank">{"Profil link"}</NavLink></div> <br />
                                    <img alt={darts.name}
                                    className="img-fluid rounded"
                                    style={{maxHeight: "500px"}}
                                    src={darts.image_url ? darts.image_url : 
                                    "https://via.placeholder.com/400x800"} 
                                    />
                                  </div>
                                  <br/>
                                  <div><NavLink to="/"><i className="bi bi-list-nested btn btn-primary"></i></NavLink> &nbsp;&nbsp;&nbsp;
                                <NavLink key="y" to={"/mod-darts/" + darts.id}><i className="bi bi-pencil btn btn-warning"></i></NavLink>&nbsp; &nbsp;&nbsp;
                                <NavLink key="y" to={"/del-darts/" + darts.id}><i className="bi bi-trash3 btn btn-danger"></i></NavLink></div>  
                                
                            </div>
                        
                    )}
                </div>
            );
}
export default DartSinglePage;
