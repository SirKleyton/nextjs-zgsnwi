const cdfs = new Set(['Cleiton', 'Marcia', 'Sidney']);

if (!cdfs.has('Bielzinho')) cdfs.add('Bielzinho');

console.table(cdfs)