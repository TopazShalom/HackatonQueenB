//import UserDetails from "./map/UserDetails";
import Link from "next/link";
import Image from "next/image";


//import QuestionsList from "./QuestionsScreen/QuestionsList";

// map assumes to recieve user , => patch the user.

export default function Home() {
  return (
    <main>
      <div className="home-header">
        <div className="headline">
        <h2>Welcome to Empowher</h2>

          <Link href="/" passHref>
            <div className="link-wrapper">
              <Image className="home-pic" src="pic.svg" alt="girl" width={300} height={300} />
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}

//   <Link href="/map">map</Link>
//   <Link href="/game">Question</Link>
