import Title from './Title';
import TeamCard from './TeamCard';
import Image1 from '../../assets/img/shrvn.jpg';
import Image2 from '../../assets/img/Subhrodeep.jpeg';
import Image3 from '../../assets/img/team-3-800x800.jpg';
import Image4 from '../../assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Here are our heroes">
                    The people behind this amazing project without whom, none of this would be possible.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Shravan Seth"
                        position="Full Stack Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Subhrodeep Basu"
                        position="Full Stack Developer"
                    />
                    <TeamCard
                        img={Image3}
                        name="Megha Ghosh Dastidar"
                        position="Program Analyser"
                    />
                    <TeamCard
                        img={Image4}
                        name="Sreeja Bose"
                        position="Program Analyser"
                    />
                    <TeamCard
                        img={Image4}
                        name="Ishak Debnath"
                        position="Content Maker"
                    />
                </div>
            </div>
        </section>
    );
}
