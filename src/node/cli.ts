import cac from 'cac';
import { createDevServer } from './dev';
import ora from 'ora';
import { generate } from '../utils/gen';


const cli = cac('fy').version('0.0.1').help()

cli.command('dev [root]', 'start dev server')
  // .alias('dev1')
  .action(async (root: string) => {
    console.log('dev', root)
    const server = await createDevServer(root)
    await server.listen()
    server.printUrls()
  })

cli.command('build [root]', 'build for production')
  .action(async (root:string)=>{
    console.log('build', root)
    const spinner = ora()
    spinner.start()
  })

cli.command('gen [name]', '生成模块代码')
  .action(async (name: string) => {
    console.log('gen codes')
    await generate(name)
  })

cli.parse()