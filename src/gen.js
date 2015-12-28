import { generate } from '.'
import jsonfile from 'jsonfile'

var out = generate()

jsonfile.writeFileSync('dist/github-corners.json', out, { spaces: 2 })
