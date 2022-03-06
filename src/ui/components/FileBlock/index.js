import PropTypes from "prop-types";
import * as S from "./styles";

export default function FileBlock({ type }) {
  return (
    <S.Container>
      <S.FileType>{type}</S.FileType>
    </S.Container>
  );
}

FileBlock.propTypes = {
  type: PropTypes.string.isRequired,
};
