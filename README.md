1.Verify title on website with Playwright framework

Please check step for verify title on website www.earnin.com in file "earnin.spec.js". The test result will be logged in "playwright-report". Please help download to check in repo "testearnin" (After job run finish, please go to menu Action > Summary and scroll down to download file).
<img width="1429" alt="image" src="https://user-images.githubusercontent.com/122553558/212555659-a6597626-88aa-42cc-ae58-89b25344c82a.png">

<img width="1061" alt="image" src="https://user-images.githubusercontent.com/122553558/212555688-62b1bd78-8308-41a1-869b-5a7a012307a8.png">


2.Script, which uplaod to S3, is added in file "playwright.yml".However, File "playwright-report" still cannot upload to S3. The error is displayed at action Upload S3 and display error "Error: ENOENT: no such file or directory, scandir '/home/runner/work/testearnin/testearnin/playwright-report'"
<img width="1052" alt="image" src="https://user-images.githubusercontent.com/122553558/212555610-bf0f9ad6-9166-4fa5-987c-2357aecf00eb.png">


Workaround:
Since I never do before. I still can't find a solution to uplaod to S3 now. After I try to find a solution in document, website and youtube, I found that there is other script to use upload file to S3. So I need time to try and consult who has the experinece.

Note: In "testearnin" repo, I add variable "AWS_KEY_ID" , "AWS_SECRET_ACCESS_KEY" and "AWS_BUCKET" in repo (Go to repo > setting > Secret and Variables > Action).
