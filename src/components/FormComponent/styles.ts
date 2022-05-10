import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0 20px;

  label {
    margin: 7px 0;
    font-size: 1.2rem;
    font-family: 'Quicksand', sans-serif;
  }

  #password,
  #email {
    background-color: transparent;
    border: 2px solid var(--purple);
    font-size: 1.2rem;
    padding: 7px 15px;
    color: #fff;
    border-radius: 50px;
  }

  input[type='submit'] {
    width: 30%;
    padding: 8px 0;
    font-size: 1.1rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    border-radius: 5px;
    color: #fff;
    border: none;
    background: linear-gradient(93.71deg, var(--purple) 13.27%, #fa58b6 101.64%);
    margin-left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .createAccount {
    display: flex;
    justify-content: center;
    margin: 10px 0 5px;

    a {
      margin-left: 5px;
      color: #fa58b6;
      text-decoration: underline;
    }
  }
`

export const RememberInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 5px 20px 0;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const LabelCheckbox = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    display: none;
  }

  span {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: transparent;
    border: 2px solid var(--purple);
    border-radius: 5px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      display: none;
      top: 0px;
      left: 4px;
      width: 5px;
      height: 10px;
      border: solid var(--purple);
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  & input:checked ~ span {
    background-color: #fff;

    &:after {
      display: block;
    }
  }

  label {
    font-size: 1rem;

    &#labelConditions {
      font-size: 0.85rem;
      width: 90%;
    }
  }
`
