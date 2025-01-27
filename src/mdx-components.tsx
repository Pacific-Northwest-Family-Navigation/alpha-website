import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {// Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-2 text-center font-[cursive]">{children}</h1>
    ),
    h2: ({children}) => (
      <h2 className="text-lg font-bold mb-2 mt-4">{children}</h2>
    ),
    h3: ({children}) => (
      <h3 className="text-m font-bold mb-1">{children}</h3>
    ),
    ul: ({children}) => (
      <ul className="mb-4">{children}</ul>
    ),
    li: ({children}) => (
      <li className="ml-2">{children}</li>
    ),
    p: ({children}) => (
      <p className="mb-2">{children}</p>
    ),
    ...components,
  }
}