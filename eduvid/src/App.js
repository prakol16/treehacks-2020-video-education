import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './DesmosModule.js';
import BlackboardModule from './BlackboardModule';

class VideoModuleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {moduleType: "calc", moduleEvents: {}};
    this.lastStateStack = {};
    this.classModule = React.createRef();
    this.video = React.createRef();
    if (!props.isTeacher) {
      this.getRequestPromise().then((result) => JSON.parse(result)).then(events => this.setState({
        moduleEvents: {calc: events}
      }));
    }
  }

  getRequestPromise() {
    // TODO: load this, don't set it manually
    return new Promise((resolve) => {
      setTimeout(resolve.bind(this), 1000,
          // `{"events":[{"timestamp":3508,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1t","color":"#c74440","latex":"y"},"oldExp":{"type":"expression","id":"1t","color":"#c74440"}}]},{"timestamp":3680,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1t","color":"#c74440","latex":"y="},"oldExp":{"type":"expression","id":"1t","color":"#c74440","latex":"y"}}]},{"timestamp":4012,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x"},"oldExp":{"type":"expression","id":"1t","color":"#c74440","latex":"y="}}]},{"timestamp":4397,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x^{ }"},"oldExp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x"}}]},{"timestamp":4910,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x^{3}"},"oldExp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x^{ }"}}]},{"timestamp":5454,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x^{3}+"},"oldExp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x^{3}"}}]},{"timestamp":5776,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x^{3}+2"},"oldExp":{"type":"expression","id":"1t","color":"#c74440","latex":"y=x^{3}+"}}]}]}`
      // `{"events":[{"timestamp":2727,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-10.0625,"ymin":-12.375,"xmax":9.9375,"ymax":12.625}},"oldGraph":{"viewport":{"xmin":-10,"ymin":-12.5,"xmax":10,"ymax":12.5}}}]},{"timestamp":2741,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-10.5,"ymin":-10.9375,"xmax":9.5,"ymax":14.0625}},"oldGraph":{"viewport":{"xmin":-10.0625,"ymin":-12.375,"xmax":9.9375,"ymax":12.625}}}]},{"timestamp":2756,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-11.0625,"ymin":-9.4375,"xmax":8.9375,"ymax":15.5625}},"oldGraph":{"viewport":{"xmin":-10.5,"ymin":-10.9375,"xmax":9.5,"ymax":14.0625}}}]},{"timestamp":2769,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-11.4375,"ymin":-8.4375,"xmax":8.5625,"ymax":16.5625}},"oldGraph":{"viewport":{"xmin":-11.0625,"ymin":-9.4375,"xmax":8.9375,"ymax":15.5625}}}]},{"timestamp":2775,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-11.625,"ymin":-8.125,"xmax":8.375,"ymax":16.875}},"oldGraph":{"viewport":{"xmin":-11.4375,"ymin":-8.4375,"xmax":8.5625,"ymax":16.5625}}}]},{"timestamp":2788,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-12,"ymin":-7.4375,"xmax":8,"ymax":17.5625}},"oldGraph":{"viewport":{"xmin":-11.625,"ymin":-8.125,"xmax":8.375,"ymax":16.875}}}]},{"timestamp":2804,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-12.25,"ymin":-7,"xmax":7.75,"ymax":18}},"oldGraph":{"viewport":{"xmin":-12,"ymin":-7.4375,"xmax":8,"ymax":17.5625}}}]},{"timestamp":2809,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-12.25,"ymin":-6.9375,"xmax":7.75,"ymax":18.0625}},"oldGraph":{"viewport":{"xmin":-12.25,"ymin":-7,"xmax":7.75,"ymax":18}}}]},{"timestamp":2824,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-12.3125,"ymin":-6.8125,"xmax":7.6875,"ymax":18.1875}},"oldGraph":{"viewport":{"xmin":-12.25,"ymin":-6.9375,"xmax":7.75,"ymax":18.0625}}}]},{"timestamp":2833,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-12.375,"ymin":-6.8125,"xmax":7.625,"ymax":18.1875}},"oldGraph":{"viewport":{"xmin":-12.3125,"ymin":-6.8125,"xmax":7.6875,"ymax":18.1875}}}]},{"timestamp":2844,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-12.375,"ymin":-6.6875,"xmax":7.625,"ymax":18.3125}},"oldGraph":{"viewport":{"xmin":-12.375,"ymin":-6.8125,"xmax":7.625,"ymax":18.1875}}}]},{"timestamp":2872,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-12.375,"ymin":-6.625,"xmax":7.625,"ymax":18.375}},"oldGraph":{"viewport":{"xmin":-12.375,"ymin":-6.6875,"xmax":7.625,"ymax":18.3125}}}]},{"timestamp":3688,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-10.375,"ymin":-8,"xmax":9.625,"ymax":17}},"oldGraph":{"viewport":{"xmin":-12.375,"ymin":-6.625,"xmax":7.625,"ymax":18.375}}}]},{"timestamp":3693,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-10.125,"ymin":-8.25,"xmax":9.875,"ymax":16.75}},"oldGraph":{"viewport":{"xmin":-10.375,"ymin":-8,"xmax":9.625,"ymax":17}}}]},{"timestamp":3707,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-9.4375,"ymin":-8.875,"xmax":10.5625,"ymax":16.125}},"oldGraph":{"viewport":{"xmin":-10.125,"ymin":-8.25,"xmax":9.875,"ymax":16.75}}}]},{"timestamp":3721,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-8.6875,"ymin":-9.6875,"xmax":11.3125,"ymax":15.3125}},"oldGraph":{"viewport":{"xmin":-9.4375,"ymin":-8.875,"xmax":10.5625,"ymax":16.125}}}]},{"timestamp":3736,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-8.0625,"ymin":-10.625,"xmax":11.9375,"ymax":14.375}},"oldGraph":{"viewport":{"xmin":-8.6875,"ymin":-9.6875,"xmax":11.3125,"ymax":15.3125}}}]},{"timestamp":3744,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.875,"ymin":-11,"xmax":12.125,"ymax":14}},"oldGraph":{"viewport":{"xmin":-8.0625,"ymin":-10.625,"xmax":11.9375,"ymax":14.375}}}]},{"timestamp":3752,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.6875,"ymin":-11.3125,"xmax":12.3125,"ymax":13.6875}},"oldGraph":{"viewport":{"xmin":-7.875,"ymin":-11,"xmax":12.125,"ymax":14}}}]},{"timestamp":3757,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.5625,"ymin":-11.4375,"xmax":12.4375,"ymax":13.5625}},"oldGraph":{"viewport":{"xmin":-7.6875,"ymin":-11.3125,"xmax":12.3125,"ymax":13.6875}}}]},{"timestamp":3765,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.5,"ymin":-11.625,"xmax":12.5,"ymax":13.375}},"oldGraph":{"viewport":{"xmin":-7.5625,"ymin":-11.4375,"xmax":12.4375,"ymax":13.5625}}}]},{"timestamp":3771,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.375,"ymin":-11.75,"xmax":12.625,"ymax":13.25}},"oldGraph":{"viewport":{"xmin":-7.5,"ymin":-11.625,"xmax":12.5,"ymax":13.375}}}]},{"timestamp":3776,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.375,"ymin":-11.8125,"xmax":12.625,"ymax":13.1875}},"oldGraph":{"viewport":{"xmin":-7.375,"ymin":-11.75,"xmax":12.625,"ymax":13.25}}}]},{"timestamp":3787,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.3125,"ymin":-11.9375,"xmax":12.6875,"ymax":13.0625}},"oldGraph":{"viewport":{"xmin":-7.375,"ymin":-11.8125,"xmax":12.625,"ymax":13.1875}}}]},{"timestamp":3790,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.25,"ymin":-12,"xmax":12.75,"ymax":13}},"oldGraph":{"viewport":{"xmin":-7.3125,"ymin":-11.9375,"xmax":12.6875,"ymax":13.0625}}}]},{"timestamp":3806,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.125,"ymin":-12.1875,"xmax":12.875,"ymax":12.8125}},"oldGraph":{"viewport":{"xmin":-7.25,"ymin":-12,"xmax":12.75,"ymax":13}}}]},{"timestamp":3816,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-7.0625,"ymin":-12.25,"xmax":12.9375,"ymax":12.75}},"oldGraph":{"viewport":{"xmin":-7.125,"ymin":-12.1875,"xmax":12.875,"ymax":12.8125}}}]},{"timestamp":3825,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-6.9375,"ymin":-12.4375,"xmax":13.0625,"ymax":12.5625}},"oldGraph":{"viewport":{"xmin":-7.0625,"ymin":-12.25,"xmax":12.9375,"ymax":12.75}}}]},{"timestamp":3840,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-6.8125,"ymin":-12.625,"xmax":13.1875,"ymax":12.375}},"oldGraph":{"viewport":{"xmin":-6.9375,"ymin":-12.4375,"xmax":13.0625,"ymax":12.5625}}}]},{"timestamp":3855,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-6.6875,"ymin":-12.8125,"xmax":13.3125,"ymax":12.1875}},"oldGraph":{"viewport":{"xmin":-6.8125,"ymin":-12.625,"xmax":13.1875,"ymax":12.375}}}]},{"timestamp":3869,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-6.5625,"ymin":-12.9375,"xmax":13.4375,"ymax":12.0625}},"oldGraph":{"viewport":{"xmin":-6.6875,"ymin":-12.8125,"xmax":13.3125,"ymax":12.1875}}}]},{"timestamp":3876,"changes":[{"type":"graphChange","newGraph":{"viewport":{"xmin":-6.5,"ymin":-13.0625,"xmax":13.5,"ymax":11.9375}},"oldGraph":{"viewport":{"xmin":-6.5625,"ymin":-12.9375,"xmax":13.4375,"ymax":12.0625}}}]}]}`
      // `{"events":[{"timestamp":4622,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1","color":"#c74440","latex":"="},"oldExp":{"type":"expression","id":"1","color":"#c74440"}}]},{"timestamp":4962,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1","color":"#c74440"},"oldExp":{"type":"expression","id":"1","color":"#c74440","latex":"="}}]},{"timestamp":5210,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1","color":"#c74440","latex":"y"},"oldExp":{"type":"expression","id":"1","color":"#c74440"}}]},{"timestamp":5408,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1","color":"#c74440","latex":"y="},"oldExp":{"type":"expression","id":"1","color":"#c74440","latex":"y"}}]},{"timestamp":5764,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"1","color":"#c74440","latex":"y=x"},"oldExp":{"type":"expression","id":"1","color":"#c74440","latex":"y="}}]},{"timestamp":6950,"changes":[{"type":"addExpr","exp":{"type":"expression","id":"2","color":"#2d70b3"}}]},{"timestamp":7694,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y"},"oldExp":{"type":"expression","id":"2","color":"#2d70b3"}}]},{"timestamp":7793,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y="},"oldExp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y"}}]},{"timestamp":8101,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x"},"oldExp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y="}}]},{"timestamp":8390,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x^{ }"},"oldExp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x"}}]},{"timestamp":8611,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x^{2}"},"oldExp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x^{ }"}}]},{"timestamp":8946,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x^{2}-"},"oldExp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x^{2}"}}]},{"timestamp":9561,"changes":[{"type":"changeExpr","exp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x^{2}-3"},"oldExp":{"type":"expression","id":"2","color":"#2d70b3","latex":"y=x^{2}-"}}]}]}`
      `{"events":[{"timestamp":1096,"delta":{"newObj":{"type":"path","version":"2.4.3","originX":"left","originY":"top","left":298.74283333333335,"top":164.66615422885576,"width":201.33,"height":86.57,"fill":null,"stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",501.5755,166.16615422885573],["Q",501.5725,166.16915422885572,498.5825,167.16417910447763],["Q",495.59250000000003,168.1592039800995,490.6091666666667,169.65174129353233],["Q",485.62583333333333,171.14427860696517,481.1408333333334,172.63681592039802],["Q",476.65583333333336,174.12935323383084,472.6691666666667,175.62189054726366],["Q",468.6825,177.1144278606965,464.1975,178.10945273631842],["Q",459.71250000000003,179.1044776119403,456.7225,179.60199004975124],["Q",453.7325,180.0995024875622,426.8225,188.55721393034827],["Q",399.9125,197.01492537313433,392.93583333333333,200],["Q",385.9591666666667,202.98507462686567,381.9725,204.97512437810946],["Q",377.98583333333335,206.96517412935324,371.50750000000005,209.9502487562189],["Q",365.0291666666667,212.93532338308458,361.54083333333335,214.42786069651743],["Q",358.0525,215.92039800995025,354.56416666666667,217.91044776119404],["Q",351.0758333333333,219.90049751243782,348.0858333333333,221.89054726368158],["Q",345.09583333333336,223.88059701492537,342.6041666666667,225.87064676616916],["Q",340.1125,227.86069651741295,338.1191666666667,228.85572139303486],["Q",336.12583333333333,229.85074626865674,334.1325,231.34328358208955],["Q",332.13916666666665,232.8358208955224,329.1491666666667,234.32835820895525],["Q",326.1591666666667,235.82089552238807,324.6641666666667,237.3134328358209],["Q",323.1691666666667,238.80597014925374,321.17583333333334,240.2985074626866],["Q",319.1825,241.7910447761194,317.18916666666667,243.28358208955223],["Q",315.1958333333333,244.77611940298507,313.2025,245.27363184079604],["Q",311.2091666666667,245.77114427860698,309.7141666666667,246.76616915422886],["Q",308.2191666666667,247.76119402985074,307.2225,248.75621890547262],["Q",306.22583333333336,249.75124378109453,305.2291666666667,250.24875621890547],["Q",304.2325,250.7462686567164,303.7341666666667,251.24378109452738],["Q",303.23583333333335,251.74129353233832,301.74083333333334,252.23880597014926],["L",300.24283333333335,252.73931840796018]]},"i":0,"type":"added"}},{"timestamp":2371,"delta":{"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":483.63,"top":296.52,"width":0,"height":0,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":0,"x2":0,"y1":0,"y2":0},"i":1,"type":"added"}},{"timestamp":2494,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":455.73,"top":291.54,"width":55.81,"height":9.95,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":27.906666666666666,"x2":-27.906666666666666,"y1":4.975124378109427,"y2":-4.975124378109427},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":483.63,"top":296.52,"width":0,"height":0,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":0,"x2":0,"y1":0,"y2":0}}},{"timestamp":2521,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":427.82,"top":291.54,"width":111.63,"height":9.95,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":55.81333333333333,"x2":-55.81333333333333,"y1":4.975124378109427,"y2":-4.975124378109427},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":455.73,"top":291.54,"width":55.81,"height":9.95,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":27.906666666666666,"x2":-27.906666666666666,"y1":4.975124378109427,"y2":-4.975124378109427}}},{"timestamp":2551,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":405.89,"top":292.04,"width":155.48,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":77.73999999999998,"x2":-77.73999999999998,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":427.82,"top":291.54,"width":111.63,"height":9.95,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":55.81333333333333,"x2":-55.81333333333333,"y1":4.975124378109427,"y2":-4.975124378109427}}},{"timestamp":2581,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":384.96,"top":293.03,"width":197.34,"height":6.97,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":98.66999999999999,"x2":-98.66999999999999,"y1":3.4825870646766077,"y2":-3.4825870646766077},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":405.89,"top":292.04,"width":155.48,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":77.73999999999998,"x2":-77.73999999999998,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2612,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":366.52,"top":292.04,"width":234.22,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":117.10833333333332,"x2":-117.10833333333332,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":384.96,"top":293.03,"width":197.34,"height":6.97,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":98.66999999999999,"x2":-98.66999999999999,"y1":3.4825870646766077,"y2":-3.4825870646766077}}},{"timestamp":2642,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":357.06,"top":292.04,"width":253.15,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":126.57666666666665,"x2":-126.57666666666665,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":366.52,"top":292.04,"width":234.22,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":117.10833333333332,"x2":-117.10833333333332,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2671,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":347.09,"top":292.04,"width":273.09,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":136.54333333333332,"x2":-136.54333333333332,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":357.06,"top":292.04,"width":253.15,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":126.57666666666665,"x2":-126.57666666666665,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2701,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":340.11,"top":292.04,"width":287.04,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":143.51999999999998,"x2":-143.51999999999998,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":347.09,"top":292.04,"width":273.09,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":136.54333333333332,"x2":-136.54333333333332,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2732,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":333.63,"top":292.04,"width":300,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":149.99833333333333,"x2":-149.99833333333333,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":340.11,"top":292.04,"width":287.04,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":143.51999999999998,"x2":-143.51999999999998,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2761,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":329.65,"top":292.04,"width":307.97,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":153.985,"x2":-153.985,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":333.63,"top":292.04,"width":300,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":149.99833333333333,"x2":-149.99833333333333,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2791,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":327.16,"top":292.04,"width":312.95,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":156.47666666666666,"x2":-156.47666666666666,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":329.65,"top":292.04,"width":307.97,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":153.985,"x2":-153.985,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2821,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":325.66,"top":292.04,"width":315.94,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":157.97166666666666,"x2":-157.97166666666666,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":327.16,"top":292.04,"width":312.95,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":156.47666666666666,"x2":-156.47666666666666,"y1":4.4776119402984875,"y2":-4.4776119402984875}}},{"timestamp":2851,"delta":{"type":"modified","modified":1,"newObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":324.66,"top":292.04,"width":317.94,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":158.96833333333333,"x2":-158.96833333333333,"y1":4.4776119402984875,"y2":-4.4776119402984875},"oldObj":{"type":"line","version":"2.4.3","originX":"center","originY":"center","left":325.66,"top":292.04,"width":315.94,"height":8.96,"fill":"black","stroke":"black","strokeWidth":3,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"x1":157.97166666666666,"x2":-157.97166666666666,"y1":4.4776119402984875,"y2":-4.4776119402984875}}}]}`
      );
    })
  }

  getMainModule() {
    if (this.state.moduleType === "calc") {
      return <Calculator ref={this.classModule} isTeacher={this.props.isTeacher} eventList={this.state.moduleEvents.calc || []}/>;
    } else if (this.state.moduleType === "blackboard") {
      return <BlackboardModule ref={this.classModule} isTeacher={this.props.isTeacher} eventList={this.state.moduleEvents.blackboard || []}></BlackboardModule>;
    }
  }

  changeModule(newModuleType) {
    this.lastStateStack[this.state.moduleType] = this.classModule.current.getState();
    this.setState({moduleType: newModuleType});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.moduleType !== this.state.moduleType) {
      if (typeof this.lastStateStack[this.state.moduleType] === "object") {
        this.classModule.current.popState(this.lastStateStack[this.state.moduleType]);
      }
      this.classModule.current.updateVideoTime(this.video.current.currentTime * 1000);
    }
  }

  render() {
    return (
        <div>
          <video ref={this.video} src="https://www.w3schools.com/html/movie.mp4"
                 type="video/mp4" controls onTimeUpdate={() => this.classModule.current.updateVideoTime(this.video.current.currentTime * 1000)}>
            Your browser does not support video lol
          </video>
          {this.getMainModule()}
        </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
          {/*className="App-link"*/}
          {/*href="https://reactjs.org"*/}
          {/*target="_blank"*/}
          {/*rel="noopener noreferrer"*/}
        {/*>*/}
          {/*Learn React*/}
        {/*</a>*/}
      {/*</header>*/}
      {/*<Calculator/>*/}
      <VideoModuleView isTeacher={false}/>
    </div>
  );
}

export default App;
