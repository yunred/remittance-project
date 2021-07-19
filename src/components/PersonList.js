import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';




function PersonList(){
  const [persons, setPersons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchPersons = async() => {
      try{
        setError(null);
        setPersons(null);
        setLoading(true);
        const res = await axios.get('https://inha-graduation-exhibition-api.herokuapp.com/transfer/accounts');
        setPersons(res.data); //데이터가 res.data에 있음
        console.log(res);
      }catch(e){
        setError(e); //e가뭐야
      }
      setLoading(false);
    };

    fetchPersons();
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!persons) return null;
  //에러뜸

  return(
    <ul>
      {persons.map(person=>(<li>{person.accountHolder}</li>))}
      
    </ul>
  );
  
}

export default PersonList;