import { NextPage } from "next";

interface IntroPageProps {
  Title: string;
}

const IntroPage: NextPage<IntroPageProps> = ({ Title }) => {
  return (
    <section className='flex-1 bg-slate-900 flex items-center justify-center'>
      <div className="container mx-auto flex items-center justify-center">
        <h1 className='text-xl'>{Title}</h1>
      </div>
    </section>
  );
};

export default IntroPage;