"use client";
import React, {ReactNode} from 'react';
import { styled } from '@mui/material/styles';

interface Props {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  maxlength?: number;
  minlength?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (value: string, event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (value: string) => void;
  readOnly?: boolean;
}

function TextArea(props: Props) {
  const { readOnly } = props; // readOnlyプロパティを抽出
  const readOnlyStyle = readOnly ? {
    color: 'gray',
    cursor: 'not-allowed',
  } : {};

  const TextArea2 = styled('textarea')({
    borderRadius: `4px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: '311px',
    height: `280px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: '10px',
    border: `1px solid rgba(202, 209, 225, 1)`,
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `black`,
    fontStyle: `normal`,
    fontFamily: `Poppins`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `24px`,
    paddingLeft: '15px',
    textTransform: `none`,
    ':focus': {
      border: '2px solid #007bff',
    },
    ...readOnlyStyle, // readOnlyの場合のスタイルを適用
  });

  return (
    <TextArea2
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      defaultValue={props.defaultValue}
      readOnly={props.readOnly}
    >
    </TextArea2>
  );
}

export default TextArea;
