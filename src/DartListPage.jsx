import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export function DartListPage() {

    const[darts,setDartsers] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        axios.get("https://darts.sulla.hu/darts")
            .then((res) => res.data)
            .then((data) => setDartsers(data))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div>
                    <p className="h1">Dartsozók</p>
                    {darts.map((darts, index) => (

                        <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                            <p className="h5">Név: {darts.name}</p>
                            <p className="text-danger">Születési dátum: {darts.birth_date}</p>
                            <p className="text-success">Megnyert világbajnokságok: {darts.world_ch_won}</p>
                            <div className="card-body">
                                <NavLink key={darts.id} to={"/darts/" + darts.id}>
                                    <img alt={darts.name}
                                        className="img-fluid"
                                        style={{ maxHeight: 200 }}
                                        src={darts.image_url ? darts.image_url :
                                            "https://via.placeholder.com/400x800"} />
                                </NavLink>
                                <br />
                                <br />
                                <NavLink className={"btn btn-success"} to={darts.profile_url} target="_blank">
                                    Wikipédia link
                                </NavLink>
                                <br />
                                <br />
                                <NavLink className={"btn btn-primary"} to={"/darts/" + darts.id}>
                                    <i class="bi bi-list-nested"></i>
                                </NavLink> &nbsp;&nbsp;
                                <NavLink className={"btn btn-warning"} to={"/mod-darts/" + darts.id}>
                                    <i className="bi bi-pencil"></i>
                                </NavLink> &nbsp;&nbsp;
                                <NavLink className={"btn btn-danger"} to={"/del-darts/" + darts.id}>
                                    <i className="bi bi-trash3"></i>
                                </NavLink>
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
}
export default DartListPage;
