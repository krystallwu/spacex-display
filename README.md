**SpaceX Display:**

Details:
The API link that was provided in the document was not loading for me, and I believe the permissions were readjusted and the public no longer has access to it. 
Because of this, I ended up using an online substitute for launches. However, this API does not have images, so my launch details page (that appears when you click on 
a launch you want details for) does not have the favorite image toggle 
feature and images/article links. I would like to describe how I would implement all of the features I didn't have a chance to fully implement below.

I would implement fetching the images from the queries.ts GET_LAUNCH_DETAILS and the article link from the API given, which would be under links{} in the query. Then, because the API would 
be properly fetched, this would be represented with my Frontend. 

To have the ability to toggle favorites, I would set this as a button the user could click and the functionality in my code would be an OnPress() function. I would use 
ContextAPI to have the results persist amongst exploring the different pages (which is what you all recommended). Using a wrapper, the app state would be preserved, and the likes would 
persist across pages.
