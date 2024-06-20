import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Form from '../components/Form';
import VideoComponent from '../components/VideoComponent';

export default function Home() {
    const router = useRouter();

    const handleMenuRedirect = () => {
        router.push('/menu'); // Redirect to the MenuPage component
    };

    return (
        <div>
            <Head>
                <title>Toingg</title>
                <meta name="description" content="Build AI Calling Agent that can do Sales Call" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <MainContent onMenuRedirect={handleMenuRedirect} />
            <VideoComponent />
            <Form />
            <Link href="/video" legacyBehavior>
                <a>
                    <button>Hear it in action</button>
                </a>
            </Link>
        </div>
    );
}
