import fs from 'fs'

const imageDataBase64 = fs.readFileSync('src/lib/logo.png').toString('base64');
const imageDataUrl = 'data:image/png;base64,' + imageDataBase64;

export default class Logo extends React.Component {
  render() {
    return <image src={imageDataUrl} />;
  }
}
