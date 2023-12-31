import dva from 'dva';
import './utils/flexible';
import 'antd/dist/antd.css'; // 引入 antd 的样式
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/leftPage').default);
app.model(require('./models/centerPage').default);
app.model(require('./models/rightPage').default);
app.model(require('./models/homePage').default);
app.model(require('./models/secondPage').default);

app.model(require('./models/V3/leftPage').default);
app.model(require('./models/V3/centerPage').default);
app.model(require('./models/V3/rightPage').default);
// 4. Router
app.router(require('./routers/router').default);

// 5. Start
app.start('#root');
