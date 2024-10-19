import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// configurando as cores do tema para ter autocomplete
type ThemeType = typeof defaultTheme;

// criando uma tipagem para o módulo styled components
// toda vez que usar o styled components ele irá puxar essa tipagem abaixo
// importei o styled-components para poder ter os tipos padrão mais os novos
// se não importasse antes, ele iria sobreescrever os tipos padrão
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}