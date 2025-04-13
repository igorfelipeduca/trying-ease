import Image from "next/image";

type LocationBadgeProps = {
  location: Location;
  onChangeLocation: (location: Location) => void;
};

export type Location = {
  name: string;
  location: string;
  imageSrc: string;
  directions: Direction[];
};

export type Direction = {
  name: string;
  icon: React.ReactNode;
  time: number; // in seconds
};

export default function LocationBadge({
  location,
  onChangeLocation,
}: LocationBadgeProps) {
  return (
    <button
      type="button"
      onClick={() => {
        onChangeLocation(location);
      }}
      className="rounded-full py-1 pl-2 pr-4 flex items-center gap-x-2 bg-white transition-colors duration-150 hover:bg-zinc-200 ease-linear cursor-pointer"
    >
      <Image
        src={location.imageSrc}
        height={100}
        width={100}
        className="size-8 rounded-full object-cover"
        alt={`${location.name}, ${location.location}`}
      />

      <span className="text-md font-medium text-black tracking-[-3%]">
        {location.name}
      </span>
    </button>
  );
}
