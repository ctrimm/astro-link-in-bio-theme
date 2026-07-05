export type EmbedProvider = 'youtube' | 'vimeo' | 'spotify' | 'other';

export interface EmbedInfo {
  embedUrl: string;
  provider: EmbedProvider;
}

/**
 * Converts a normal share URL (YouTube/Vimeo/Spotify) into an embeddable
 * iframe src. URLs that are already embed URLs, or from an unrecognized
 * host, pass through unchanged.
 */
export function getEmbedUrl(url: string): EmbedInfo {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return { embedUrl: url, provider: 'other' };
  }

  const host = parsed.hostname.replace(/^www\./, '');

  if (host === 'youtu.be') {
    const id = parsed.pathname.slice(1);
    return { embedUrl: `https://www.youtube.com/embed/${id}`, provider: 'youtube' };
  }

  if (host === 'youtube.com' || host === 'm.youtube.com') {
    if (parsed.pathname === '/watch') {
      const id = parsed.searchParams.get('v');
      if (id) return { embedUrl: `https://www.youtube.com/embed/${id}`, provider: 'youtube' };
    }
    if (parsed.pathname.startsWith('/shorts/')) {
      const id = parsed.pathname.split('/')[2];
      if (id) return { embedUrl: `https://www.youtube.com/embed/${id}`, provider: 'youtube' };
    }
    return { embedUrl: url, provider: 'youtube' };
  }

  if (host === 'vimeo.com') {
    const id = parsed.pathname.split('/').filter(Boolean)[0];
    if (id) return { embedUrl: `https://player.vimeo.com/video/${id}`, provider: 'vimeo' };
  }

  if (host === 'player.vimeo.com') {
    return { embedUrl: url, provider: 'vimeo' };
  }

  if (host === 'open.spotify.com') {
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts[0] && parts[0] !== 'embed') {
      return { embedUrl: `https://open.spotify.com/embed/${parts.join('/')}`, provider: 'spotify' };
    }
    return { embedUrl: url, provider: 'spotify' };
  }

  return { embedUrl: url, provider: 'other' };
}
