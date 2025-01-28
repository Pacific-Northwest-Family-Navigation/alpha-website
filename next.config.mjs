import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  // Static export
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports#version-history
  output: 'export',

  // Configure a base path
  // https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  // basePath: path,

  // Disable server side image optimization too
  // https://nextjs.org/docs/api-reference/next/image#unoptimized
  'images.unoptimized': true,

  // Support Next.js config wrappers, such as next-pwa
  // https://github.com/actions/configure-pages/issues/44#issuecomment-1705407518
  allowWrappingCall: true,
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)