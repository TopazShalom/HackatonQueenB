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
          <main>
            <h1>Oopsy... the correct answer was</h1>
            <Link href="/game">Next</Link>
          </main>
       )
}
  export default ResultLoss;
