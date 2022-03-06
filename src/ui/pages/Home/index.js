import useCounterFiles from "../../hooks/useCounterFiles";
import { v4 } from "uuid";
import FileBlock from "../../components/FileBlock";
import * as S from "./styles";
import Header from "../../components/Header";
import InformationBlock from "../../components/InformationBlock";

export default function Home() {
  const { data, isLoading } = useCounterFiles();
  const { name, author, url, filesStructure } = data;

  const getFilesBlock = () => {
    return Object.entries(filesStructure).map((item) => {
      const type = item[0];
      const number = item[1];

      return (
        <S.BlockContainer key={v4()}>
          <S.FilesTitle>{`${type} files: ${number}`}</S.FilesTitle>
          <S.FilesRowContainer key={v4()}>
            {[...Array(number)].map(() => {
              return <FileBlock key={v4()} type={type} />;
            })}
          </S.FilesRowContainer>
        </S.BlockContainer>
      );
    });
  };

  return (
    <>
      <Header title="Project files information" />
      {isLoading ? (
        <S.LoaderContainer>
          <S.LoadingMessage>Loading</S.LoadingMessage>
          <S.Dot delay="0s" />
          <S.Dot delay="0.1s" />
          <S.Dot delay="0.2s" />
        </S.LoaderContainer>
      ) : (
        <S.Content>
          <S.MainInformation>
            <InformationBlock label="Project name" value={name} />
            <InformationBlock label="Project author" value={author} />
            <InformationBlock label="Project url" value={url} />
          </S.MainInformation>
          {getFilesBlock()}
        </S.Content>
      )}
    </>
  );
}
