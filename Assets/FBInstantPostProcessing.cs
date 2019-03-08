using System.IO;
 
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Unity.Tiny;
using UnityEditor;
 
public class FBInstantPostProcessing
{
    [TinyPostprocessBuildAttribute(1)]
    static void PostProcessFBInstant(TinyBuildOptions opts, TinyBuildResult result)
    {
        string finalBuildFolder = result.BuildFolder;
        bool buildResult = result.Success;
 
        if (buildResult)
        {
            // Only enable FB instant if it's a release version
            if (opts.Configuration == TinyBuildConfiguration.Release)
            {
                CopyFBAppJson(finalBuildFolder);
                AddFBLibsToHTML(finalBuildFolder);
            }
 
        }
    }
 
    static void CopyFBAppJson(string destination)
    {
        FileUtil.CopyFileOrDirectory("Assets/fbapp-config.json", destination + "/fbapp-config.json");
        FileUtil.CopyFileOrDirectory("Assets/fbLoader.js", destination + "/fbLoader.js");
        //FileUtil.CopyFileOrDirectory("Assets/cert.pem", destination + "/cert.pem");
        //FileUtil.CopyFileOrDirectory("Assets/key.pem", destination + "/key.pem");
    }
 
    static void AddFBLibsToHTML(string destination)
    {
        string indexHtmlPath = destination + "/index.html";
        // Ok, open the HTML and read it, then sub in our fbinstant stuff.
        string toInsert = "<script src=\"https://connect.facebook.net/en_US/fbinstant.6.2.js\"></script>";        
        string toInsert2 = "<script src=\"./fbLoader.js\"></script>";
        var endTag = "</body>";
        var newTag = toInsert + toInsert2 + endTag;
        var fileText = File.ReadAllText(indexHtmlPath);
        fileText = fileText.Replace(endTag, newTag);
        // write the file back out
        using (FileStream fs = new FileStream(indexHtmlPath, FileMode.Open, FileAccess.Write))
        using (StreamWriter sw = new StreamWriter(fs))
        {
            sw.Write(fileText);
        }
    }
}
 