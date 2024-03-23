import Image from 'next/image';

interface ImageAtomPropTypes {
  figureSize: string;
  imageSource: string;
  alternativeText: string;
}

export const ImageAtom = ({ figureSize, imageSource, alternativeText }: ImageAtomPropTypes) => {
  return (
    <figure className={`image is-${figureSize}`}>
      <Image src={imageSource} alt={alternativeText} />
    </figure>
  );
};
