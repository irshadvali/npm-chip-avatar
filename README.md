# npm-chip-avatar

 <AvatarList
          dataResult={this.state.showData}
          avatarSize={30}
          strokeColor={"#cccccc"}
          strokeWidth={1}
          labelTextColor={"#ffffff"}
          labelTextFontSize={15}
          maxAvatarShow={4}
          maxTextShow={"more users"}
          maxTextShowColor={"#ffffff"}
          maxTextShowSize={15}
      />
      
      
      
      
  # dataResult in JSON formate and structure shouled be same like below result and node name should be as 'image' and 'name'
      
  dataResult=  
  [
    {
      
      image: "",
      name: "Dawn Apes"
    },
    {
      
      image: "https://api.androidhive.info/json/movies/2.jpg",
      name: "District Nine"
    },
    {
     
      image: "https://api.androidhive.info/json/movies/3.jpg",
      name: "Transformers"
    },
    {
    
      image: "https://api.androidhive.info/json/movies/4.jpg",
      name: "X-Men"
    },
    {
      
      image: "https://api.androidhive.info/json/movies/5.jpg",
      name: "The Machinist"
    }
    ]
