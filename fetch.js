import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const galleries = [
    'https://postimg.cc/gallery/KMQ3kcV',
    'https://postimg.cc/gallery/k21qYbr',
    'https://postimg.cc/gallery/wNrDbTJ',
    'https://postimg.cc/gallery/PhX77Vv'
  ];
  for (const g of galleries) {
    console.log(g);
    const data = await fetchPage(g);
    const matches = [...data.matchAll(/href="([^"]+)"/g)].map(m => m[1]).filter(url => url.includes('postimg.cc/') && !url.includes('gallery'));
    
    const directUrls = [];
    for (const m of matches.slice(0, 10)) { // Limit to 10 to avoid too many requests
      const pageData = await fetchPage(m);
      const directMatch = pageData.match(/href="(https:\/\/i\.postimg\.cc\/[^"]+)"/);
      if (directMatch) directUrls.push(directMatch[1]);
    }
    console.log(directUrls);
  }
}
run();
