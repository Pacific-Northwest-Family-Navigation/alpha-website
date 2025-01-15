'use client';

import { FacebookProvider, Page } from 'react-facebook';

export default function Facebook({ url }: { url: string }) {
    return (<>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FacebookProvider appId="962478891931015">
        <Page href={url} tabs="timeline" />
      </FacebookProvider> 
        </div>
    </>);
}