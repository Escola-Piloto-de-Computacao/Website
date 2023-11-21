import { ConfigProvider, FloatButton } from 'antd';

const BackToTopButton = () => {
   return (
      <ConfigProvider
         theme={{
            token: {
               fontSizeIcon: 22,
               controlHeightLG: 56,

               colorFillContent: "rgba(0, 146, 233, 0.8)",
               colorBgElevated: "rgba(0, 146, 233, 0.8)",
            },
         }}
      >
         <div className="invisible xsm:visible">
            <FloatButton.BackTop shape='circle' />
         </div>
      </ConfigProvider>
   );
};

export default BackToTopButton;