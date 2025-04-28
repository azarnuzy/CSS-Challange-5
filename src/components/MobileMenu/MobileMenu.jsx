import React from 'react';
import styled from 'styled-components';
import { Close, Content, Overlay, Portal, Title } from '@radix-ui/react-dialog';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import "../Header/styles.css"
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Overlay className='DialogOverlay' />
      <Content className='DialogContent'>
        <Title className='DialogTitle'>
          <span></span>
        </Title>
        <CloseWrapper >

        <UnstyledButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} size={24} />
          <VisuallyHidden>Close</VisuallyHidden>
        </UnstyledButton>
        </CloseWrapper>
        <ContentWrapper>

          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </ContentWrapper>
      </Content>
    </Portal>
  );
};

const CloseWrapper = styled(Close)`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
  margin-bottom: auto;

`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.875rem;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default MobileMenu;
