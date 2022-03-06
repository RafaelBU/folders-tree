import PropTypes from "prop-types";
import * as S from "./styles";

export default function InformationBlock({ label, value }) {
  return (
    <S.InformationContainer>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.InformationContainer>
  );
}

InformationBlock.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
