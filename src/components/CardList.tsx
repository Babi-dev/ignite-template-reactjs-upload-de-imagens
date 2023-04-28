import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imageCurrentUrl, setImageCurrentUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = useCallback((url: string): void => {
    onOpen();
    setImageCurrentUrl(url);
  }, []);

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid templateColumns="repeat(3, 1fr)" gap="40">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={() => handleViewImage(card.url)}
            />
          );
        })}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={imageCurrentUrl}
      />
    </>
  );
}
