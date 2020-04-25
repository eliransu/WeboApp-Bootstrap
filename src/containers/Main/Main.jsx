import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { MainWrapper } from './Main.styled';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { Text, FlexDivCenter } from '../../components/Typography/Typography';
import { loginAction } from '../../data/modules/auth/auth.actions';

export default () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeUser } = useSelector(store => store.auth);

  function onToggleLanguage() {
    return getActiveLanguage() === 'en'
      ? changeLanguage('he')
      : changeLanguage('en');
  }

  async function onLogin() {
    try {
      dispatch(loginAction());
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <MainWrapper>
      {activeUser && <Text size="xxxlarge">{t('welcome', { name: activeUser.displayName })}</Text>}
      <Card>
        <Text size="title">{t('welcome_to_webo_app')}</Text>
        <FlexDivCenter>
          <Button margin="5px" onClick={onToggleLanguage}>{t('change_language')} <Icon inButton type="thunderbolt" /></Button>
          <Button margin="5px" onClick={onLogin}>{t('login')} <Icon inButton type="login" /></Button>
        </FlexDivCenter>
      </Card>
    </MainWrapper>
  );
};