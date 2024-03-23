import { ImageAtomType, ReactChildrenType } from '@/types/global';
import {
  ContentContainerAtom,
  ImageAtom,
  MediaAtom,
  MediaContentAtom,
  MediaLeftAtom,
  SubtitleAtom,
  TitleAtom,
} from '../atoms';
import {
  CardAtom,
  CardContentAtom,
  CardFooterAtom,
  CardFooterButtonItemAtom,
  CardImageContainerAtom,
} from '../atoms/Card';

interface VerticalCardPropTypes {
  cardImage: ImageAtomType;
  mediaImage: ImageAtomType;
  children: ReactChildrenType;
  footerButton: {
    text: string;
    handler: React.MouseEventHandler<HTMLButtonElement>;
  };
}

export const VerticalCardMolecule = ({
  children,
  cardImage,
  mediaImage,
  footerButton,
}: VerticalCardPropTypes) => {
  return (
    <CardAtom>
      <CardImageContainerAtom>
        <ImageAtom {...cardImage} />
      </CardImageContainerAtom>

      <CardContentAtom>
        <MediaAtom>
          <MediaLeftAtom>
            <ImageAtom {...mediaImage} />
          </MediaLeftAtom>

          <MediaContentAtom>
            <TitleAtom isSize='4'>aladino borges</TitleAtom>

            <SubtitleAtom isSize='6'>@aladinoborges</SubtitleAtom>
          </MediaContentAtom>
        </MediaAtom>

        <ContentContainerAtom>{children}</ContentContainerAtom>

        <CardFooterAtom>
          <CardFooterButtonItemAtom onClick={footerButton.handler}>
            {footerButton.text}
          </CardFooterButtonItemAtom>
        </CardFooterAtom>
      </CardContentAtom>
    </CardAtom>
  );
};
