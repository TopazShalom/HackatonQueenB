import Link from "next/link";

/*
export function getServerSideProps(next_question) {
  const { id } = next_question.query;

  return {
    props: {
      id,
    },
  };
}*/

const ResultLoss = () => {
  /*
  let next_q = {id};
  next_q = Number(next_q);
  let map_route = "/map";
  let question_route= "/game";
  let next_route = question_route;
  if(next_q%3 == 1)
  {
    next_route = map_route;
  }
  */
      return ( 
          <main style={{"text-align": "center"}}>
            <h1 style={{"text-align": "center"}}><strong>Oopsy... maybe you should try again</strong></h1>
            <Link style={{"text-align": "center"}} href="/game">Continue</Link>
          </main>
       )
}
  export default ResultLoss;
