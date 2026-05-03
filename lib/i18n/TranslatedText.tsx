'use client';

import { useTranslatedString } from './useTranslatedContent';

/**
 * Composant utilitaire qui traduit une chaîne via l'API DeepL.
 * Pratique pour les pages avec beaucoup de texte statique français
 * (mentions légales, CGV, etc.) qu'on ne veut pas mettre dans le dictionnaire.
 *
 * Usage :
 *   <T>Lorem ipsum dolor sit amet</T>
 */
export default function T({
  children,
  as: Component = 'span',
  className,
}: {
  children: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const [translated] = useTranslatedString(children);
  const Comp = Component as 'span';
  return <Comp className={className}>{translated}</Comp>;
}
