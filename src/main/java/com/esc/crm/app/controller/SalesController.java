package com.esc.crm.app.controller;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/sales")
public class SalesController {

    org.slf4j.Logger logger = LoggerFactory.getLogger(SalesController.class);

    @CrossOrigin
    @GetMapping("/list")
    public String getInfo(HttpServletRequest request){
//        logger.info(request.getHeader("Authentication"));
        return "{\"code\":200,\"data\":{\"total\":20,\"items\":[{\"order_no\":\"feF5B1d9-cfD1-5e5d-fE6d-b2a8BBC78Cf8\",\"timestamp\":1355381424023,\"username\":\"Betty Lewis\",\"price\":3220.8,\"status\":\"pending\"},{\"order_no\":\"dFE773aB-82A1-4ECC-402b-CcEcaBEA5B2F\",\"timestamp\":1355381424023,\"username\":\"Amy Williams\",\"price\":3744.2,\"status\":\"success\"},{\"order_no\":\"40dcfE0C-9025-8ef8-4E3c-bf242aF3c34B\",\"timestamp\":1355381424023,\"username\":\"Margaret Wilson\",\"price\":14606,\"status\":\"pending\"},{\"order_no\":\"d63f74bf-336A-9AfC-4FCc-Ed64A5dAf8F1\",\"timestamp\":1355381424023,\"username\":\"Sarah Rodriguez\",\"price\":1205.33,\"status\":\"success\"},{\"order_no\":\"53cF6B89-9D68-fefB-BCEA-67E8FAE4Fe9b\",\"timestamp\":1355381424023,\"username\":\"Sandra Smith\",\"price\":11500.84,\"status\":\"pending\"},{\"order_no\":\"5cEF287E-bC2d-c3fe-A118-ecDf8f3Dfc25\",\"timestamp\":1355381424023,\"username\":\"Melissa Young\",\"price\":4969.3,\"status\":\"pending\"},{\"order_no\":\"65e30ACD-F5F4-3709-64B5-5EC5bC11bb7d\",\"timestamp\":1355381424023,\"username\":\"Jennifer Young\",\"price\":10774.24,\"status\":\"success\"},{\"order_no\":\"6c99fef3-69F1-5c6B-AEd4-DB4Be4Dbccac\",\"timestamp\":1355381424023,\"username\":\"Michael Martin\",\"price\":2790,\"status\":\"success\"},{\"order_no\":\"7eE5aA38-67d5-50F2-e1Bb-1eCb4dAEF5e9\",\"timestamp\":1355381424023,\"username\":\"Daniel Lopez\",\"price\":14471.8,\"status\":\"success\"},{\"order_no\":\"dD8B27dE-D853-1863-ebbf-4D7EfCA61E5b\",\"timestamp\":1355381424023,\"username\":\"John Johnson\",\"price\":13995.97,\"status\":\"pending\"},{\"order_no\":\"f6fAE2e4-2EBb-58Af-cC3F-3dA57e3FEC9A\",\"timestamp\":1355381424023,\"username\":\"Laura Martin\",\"price\":6939.6,\"status\":\"success\"},{\"order_no\":\"C40fAbEe-6e2f-FC9B-0CcC-FdEff3ebBCBf\",\"timestamp\":1355381424023,\"username\":\"Christopher Hall\",\"price\":14840,\"status\":\"pending\"},{\"order_no\":\"cc3dA9fb-cdb0-AEC1-9a52-b6E5d15bC9BC\",\"timestamp\":1355381424023,\"username\":\"Barbara Young\",\"price\":6607.9,\"status\":\"success\"},{\"order_no\":\"35ADce25-2f50-6975-9db8-8AF5fCed14D4\",\"timestamp\":1355381424023,\"username\":\"Charles Martinez\",\"price\":11928,\"status\":\"pending\"},{\"order_no\":\"c40Db4Ed-8122-e97b-B463-fadB7A7C7E7C\",\"timestamp\":1355381424023,\"username\":\"Thomas Martin\",\"price\":3558.6,\"status\":\"pending\"},{\"order_no\":\"F4dab8e6-3b0F-CFe5-CBd3-7CFfec4d3eDf\",\"timestamp\":1355381424023,\"username\":\"Maria Clark\",\"price\":2069.6,\"status\":\"success\"},{\"order_no\":\"D61BFcE5-6D9d-B77B-f663-cAAD9DBbBb4D\",\"timestamp\":1355381424023,\"username\":\"Jose Lewis\",\"price\":4863.15,\"status\":\"pending\"},{\"order_no\":\"ffD7F0F2-fDd5-4FE4-ef63-DFe1e17e0F8d\",\"timestamp\":1355381424023,\"username\":\"Michael Hall\",\"price\":11481.3,\"status\":\"success\"},{\"order_no\":\"BbED1D07-d4E8-3ECB-Fd9E-C3CeAEB8cFc3\",\"timestamp\":1355381424023,\"username\":\"Linda Rodriguez\",\"price\":5780.15,\"status\":\"pending\"},{\"order_no\":\"dCF8cFBd-7d4b-9dEb-CEdB-feBA7EAb197f\",\"timestamp\":1355381424023,\"username\":\"Shirley Johnson\",\"price\":5920.3,\"status\":\"success\"}]}}";
    }

}
