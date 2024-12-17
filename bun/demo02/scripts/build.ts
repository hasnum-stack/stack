 const result =  await Bun.build({
    entrypoints: ['./src/index.js'],
    outdir: './out',
   splitting: true, // default
   external: ['react', 'react-dom'], // default
 })
 console.log(result)
