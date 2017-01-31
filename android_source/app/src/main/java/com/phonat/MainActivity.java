package com.phonat;

import com.facebook.react.ReactActivity;
import com.oblador.vectoricons.VectorIconsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.poberwong.launcher.IntentLauncherPackage;

import android.os.Bundle;
import android.view.WindowManager;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Phonat";
    }

	/**
	* Disable swipe down notification
	*/
    /*@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
    	getWindow().addFlags(WindowManager.LayoutParams.TYPE_SYSTEM_OVERLAY);
	}*/

}
