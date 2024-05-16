import TextFieldWithLimit from './TextFieldWithLimit';


function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-[453px] h-[188px] p-[52px] bg-white rounded-[8px] border flex flex-col justify-center gap-[13px]">
      <label className="font-medium text-black opacity-100 text-[14px]">
          Full name
        </label>
        <TextFieldWithLimit />
      </div>
    </div>
  );
}

export default App;
