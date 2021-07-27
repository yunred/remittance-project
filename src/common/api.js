function api( address ){);
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const money = useSelector((state)=> state.amount.money);
  const depositPerson = useSelector((state)=> state.account.deposit);


  useEffect(()=>{
    let abortController = new AbortController(); //http fetch를 취소하는 AbortController를 사용해서 에러 해결
    const fetchAccounts = async() => {
      try{
        setError(null);
        setAccounts(null);
        setLoading(true);
        const res = await axios.get('https://inha-graduation-exhibition-api.herokuapp.com/my-accounts');
        setAccounts(res.data); //데이터가 res.data에 있음
      }catch(e){
        setError(e); //e가뭐야
      }
      setLoading(false);
    };

    fetchAccounts();
    return () => {
      abortController.abort();
    }
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!accounts) return null;
