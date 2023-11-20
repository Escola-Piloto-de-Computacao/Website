import { ConfigProvider, FloatButton } from 'antd';

const BackToTopButton = () => {
   return (
      <ConfigProvider
         theme={{
            components: {
               FloatButton: {
                  zIndexPopup: 10,
               },
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