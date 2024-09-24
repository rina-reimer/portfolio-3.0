import Image from "next/image";
import data from '/src/lib/en.json';

const Journal = () => {
  return (
    <div className="relative grid md:grid-cols-2 grid-cols-1 gap-8">
      {/* first page */}
      <div className="bg-yellow border-4 border-navy aspect-[3/4] drop-shadow-lg">
        <div className="flex flex-row">
          <div className="relative w-2/5 aspect-square self-center justify-self-center m-4 bg-pink border-4 border-navy">
            <Image src={"/memoji.png"} fill={true}></Image>
          </div>
          <div className="flex flex-col">
            <div className="w-2/5 text- mt-4 mx-4 text-purple">{data.name}</div>
            <div className="w-2/5 text-lg mb-4 mx-4">they/them</div>
          </div>
          
        </div>
        {/* description */}
        <div className="mx-4">
          {data.abt2}
        </div>
      </div>


      <div className="bg-yellow border-4 border-navy aspect-[3/4] drop-shadow-lg">

      </div>
    </div>
  );
};

export default Journal;