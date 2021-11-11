import Image from "next/image";
import Link from "next/link";

type Collection = {
  id: number;
  title: string;
  description: string;
  imgPath: string;
  websiteUrl: string;
};

interface CollectionProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionProps) => {
  return (
    <div className="flex flex-col sm:flex-row max-w-3xl bg-white dark:bg-fx-dark-second rounded-2xl p-3 mb-12">
      <Link href="/projects/collection/">
        <a>
          <div className="h-32 sm:flex-25 p-4 text-center">
            <Image
              src={collection.imgPath}
              alt={collection.title}
              width="100%"
              height="100%"
              objectFit="contain"
            ></Image>
          </div>
          <div className="flex-1">
            <h3 className="text-center text-2xl font-semibold p-2">
              {collection.title}
            </h3>
            <p className="text-center">{collection.description}</p>
            <div>
              <a href={collection.websiteUrl}>Website</a>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CollectionCard;
