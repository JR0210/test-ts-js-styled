import styled from "styled-components";
import { ReactElement } from "react";
import StyledRow from "./Row";

interface ActionButton {
  id: string;
  name: string;
}
interface Props {
  actions: ActionButton[];
  label: String;
}

const ActionCategory = styled.div`
  align-items: center;
  margin: 0 16px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const CategoryLabel = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
`;

export default function ActionButtonGroup({
  actions = [],
  label,
}: Props): ReactElement {
  return (
    <ActionCategory
      height="100%"
      align="flex-start"
      items="flex-start"
      gutter={1}
    >
      <CategoryLabel>{label}</CategoryLabel>
      <StyledRow width="100%">2</StyledRow>

      {actions.map((action) => (
        <CategoryItemButton
          key={action.id}
          data-cy="cy-actionFormButton"
          onClick={onActionClick(action.id)}
        >
          {action.name}
        </CategoryItemButton>
      ))}
    </ActionCategory>
  );
}
