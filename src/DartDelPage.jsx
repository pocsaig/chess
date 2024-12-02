import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function DartDelPage(props) {
    const params = useParams();
    const id = params.dartsId;
    const navigate = useNavigate();
    const[darts,setDarts] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`https://darts.sulla.hu/darts/${id}`);
            const darts = await res.json();
            setDarts(darts);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]);
 return (
    <div className="p-5 m-auto text-center content bg-lavender">
        {isPending || !darts.id ? (
            <div className="spinner-border"></div>
        ) : (
                        <div className="card p-3">
                            <div className="card-body">
                            <h5 className="card-title">Törlendő elem neve: {darts.name}</h5>
                            <div className="lead">Születési idő: {darts.birth_date}</div>
                                <img alt={darts.name}
                                className="img-fluid rounded"
                                style={{maxHeight: "500px"}}
                                src={darts.image_url ? darts.image_url : 
                                "https://via.placeholder.com/400x800"} 
                                />
                              </div>
                              <form onSubmit={(event) => {
                
            event.persist();
            event.preventDefault();
            fetch(`https://darts.sulla.hu/darts/${id}`, {
                method: "DELETE",
                
                
            })
        
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
                              <div>
<NavLink to={"/"}><button className="bi bi-list-nested btn btn-warning">&nbsp;Vissza</button></NavLink>
&nbsp;&nbsp;
<button className="bi bi-trash3 btn btn-danger">&nbsp;Törlés</button></div></form>   
                        </div>
                    
                )}
            </div>
        );
}
    export default DartDelPage;
