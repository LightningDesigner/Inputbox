import TextFieldWithLimit from './TextFieldWithLimit';


function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[453px] h-[188px] p-[52px] bg-white rounded-[8px] border flex flex-col justify-center">
        <label className="text-md font-medium text-black opacity-90 mb-[12px]" style={{ fontSize: '13px' }}>
          Name
        </label>
        <TextFieldWithLimit />
      </div>
    </div>
  );
}

export default App;
