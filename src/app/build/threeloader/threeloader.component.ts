import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { NgxSpinnerService } from 'ngx-spinner';
import { Color } from 'three';
@Component({
  selector: 'app-threeloader',
  templateUrl: './threeloader.component.html',
  styleUrls: ['./threeloader.component.css'],
})
export class ThreeloaderComponent implements OnInit {
  @Input() bikeColor;
  constructor(private spinner: NgxSpinnerService) {}
  // 0 is black
  @Output() sendColor = new EventEmitter();
  ngOnInit(): void {
    this.bike();
    this.spinner.show();
  }

  setColor(val) {
    this.sendColor.emit(val);
  }
  bike = () => {
    window.addEventListener('click', (e) => {
      let id = (<HTMLButtonElement>e.target).id;
      if (id === 'gray') {
        let frame;
        frame = new THREE.MeshPhongMaterial({
          color: 0x767676,
          side: THREE.DoubleSide,
          shadowSide: THREE.FrontSide,
        });
        initFrame(bike, frame);
      }
      if (id === 'black') {
        let frame;
        frame = new THREE.MeshPhongMaterial({
          color: 0x000000,
          side: THREE.DoubleSide,
          shadowSide: THREE.FrontSide,
        });
        initFrame(bike, frame);
      }
    });

    window.addEventListener('resize', onWindowResize);

    var camera, scene, renderer, bike;

    let container = document.getElementById('container');

    // scene

    scene = new THREE.Scene();

    // background

    scene.background = new THREE.Color(0xd8d8d8);

    // scene.background = new THREE.Color(0xffffff);

    // renderer

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    document.querySelector('canvas').style.outline = 'none';
    document.querySelector('canvas').style.cursor = 'grab';

    // camera

    camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      5,
      7000
    );
    scene.add(camera);
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.maxPolarAngle = Math.PI / 2;
    let loader = new GLTFLoader();
    let url = '/assets/3d/bike.glb';

    const TYRE_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });
    const FRAME_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });
    // tmps are dust caps in tyre
    const TMPS_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    const LOCK_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // glass

    const GLASS_MTL = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // front panel

    const FRONT_PANEL_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // front lock

    const FRONT_LOCK_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // mud gaurd center mount

    const MUDGUARD_MOUNT_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // mid frame color

    const MID_FRAME_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // chain link color

    const CHAINLINK_MTL = new THREE.MeshPhongMaterial({
      color: 0x808080,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // front mudgaurd mount cad
    const FRONT_MUDCAD_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // battery lock
    const BATTERY_LOCK_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // disc

    const DISC_MTL = new THREE.MeshPhongMaterial({
      color: 0xc0c0c0,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // rim material

    const RIM_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    // reflector material

    const REFLECTOR_MTL = new THREE.MeshPhongMaterial({
      color: 0xcc0000,
      side: THREE.DoubleSide,
      shadowSide: THREE.FrontSide,
    });

    camera.position.set(10, 10, 10);
    let dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: 'js' });
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    loader.setDRACOLoader(dracoLoader);
    loader
      .loadAsync(url)
      .then(function (gltf) {
        bike = gltf.scene;
        bike.children[0].castShadow = true;
        bike.children[0].receiveShadow = true;
        bike.children[0].children[0].castShadow = true;
        bike.children[0].children[0].receiveShadow = true;
        bike.traverse((o) => {
          o.castShadow = true;
          o.receiveShadow = true;
        });
        console.log(bike.children[0]);
        bike.traverse((o) => {
          if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;

            if (o.material.map) {
              o.material.map.anisotropy = 16;
            }
          }
        });

        const boundingBox = new THREE.Box3();
        boundingBox.setFromObject(bike);
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        camera.position.y = center.y - 400;
        camera.position.x = center.x + 1200;
        camera.updateProjectionMatrix();
        const size = new THREE.Vector3();
        boundingBox.getSize(size);

        const fov = camera.fov * (Math.PI / 180);
        const maxDim = Math.max(size.x, size.y, size.z);
        let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));

        camera.position.z = 1540;

        camera.updateProjectionMatrix();
        bike.position.setY(-500);
        // bike.position.setZ(-500);
        // bike.position.y
        // bike_position = bike.position.y;
        // console.log(bike_position);
        camera.lookAt(center);

        initColor(bike, TYRE_MTL);
        initFrame(bike, FRAME_MTL);

        scene.add(gltf.scene);
        animate();
      })
      .then(() => {
        this.spinner.hide();
      });

    function initFrame(parent, mtl) {
      parent.traverse((o) => {
        if (o.name === 'frame') {
          o.material = mtl;
        }
        if (o.name === 'handle') {
          o.material = mtl;
        }
        if (o.name === 'handle_grip') {
          o.material = mtl;
        }
      });
      // parent.castShadow = true;
      // parent.receiveShadow = true;
      console.log(parent.parent);
    }

    function initColor(parent, mtl) {
      parent.traverse((o) => {
        if (o.name === 'ttyre') {
          o.material = mtl;
        }
        if (o.name === 'battery_lock') {
          o.material = BATTERY_LOCK_MTL;
          o.material.visible = false;
        }
        if (o.name === 'tmps') {
          o.material = TMPS_MTL;
        }
        if (o.name === 'lock_1') {
          o.material = LOCK_MTL;
        }
        if (o.name === 'glass') {
          o.material = GLASS_MTL;
        }
        if (o.name === 'front_plate_front_-_Copy_-_Copy') {
          o.material = FRONT_PANEL_MTL;
        }
        if (o.name === 'lock') {
          o.material = FRONT_LOCK_MTL;
        }
        if (o.name === 'front_mudguard_center_mount_20') {
          o.material = MUDGUARD_MOUNT_MTL;
        }
        if (o.name === 'frame_-_Copy_(2)') {
          o.material = MID_FRAME_MTL;
        }
        if (o.name === 'chainlink') {
          o.material = CHAINLINK_MTL;
        }
        if (o.name === 'front_mudguard_mount_1') {
          o.material = FRONT_MUDCAD_MTL;
        }
        if (o.name === 'steering_cap_reno') {
          o.material = mtl;
        }
        if (o.name === 'front_mudguard_mount_cad') {
          o.material = FRONT_MUDCAD_MTL;
        }

        if (o.name === 'Remgreep_Saccon') {
          o.material = mtl;
        }
        if (o.name === 'seat') {
          o.material = mtl;
        }

        if (o.name === 'rear_clamp_disc') {
          o.material = mtl;
        }
        if (o.name === '3D') {
          o.material = mtl;
        }
        if (o.name === 'disc') {
          o.material = DISC_MTL;
        }
        if (o.name === 'front_clamp') {
          o.material = mtl;
        }

        if (o.name === 'rim') {
          o.material = RIM_MTL;
        }

        if (o.name === 'rear_mudguard_center_mount_20') {
          o.material = MUDGUARD_MOUNT_MTL;
        }

        if (o.name === 'mudguard_front_3') {
          o.material = mtl;
        }
        if (o.name === 'mudguard_rear_3') {
          o.material = mtl;
        }
        if (o.name === 'battery_outer_case') {
          o.material = mtl;
        }
        if (o.name === 'peg') {
          o.material = mtl;
        }
        if (o.name === 'rear_mudguard_mount_cad') {
          o.material = mtl;
        }
        if (o.name === 'calliper') {
          o.material = mtl;
        }
        if (o.name === 'rear_clamp') {
          o.material = mtl;
        }
        if (o.name === 'socket_head_cap_screw_am') {
          o.material = mtl;
        }
        if (o.name === 'Reflector') {
          o.material = REFLECTOR_MTL;
        }
        if (o.name === 'front_disc_mount') {
          o.material = mtl;
        }
        if (o.name === 'front_brake_liner') {
          o.material = mtl;
        }
        if (o.name === 'rear_brake_liner') {
          o.material = mtl;
        }
        if (o.name === 'adapter_A_F160_R140') {
          o.material = mtl;
        }
        if (o.name === 'rear_shaft_wheel_20') {
          o.material = mtl;
        }
        if (o.name === 'front_shaft_wheel_20') {
          o.material = mtl;
        }
        if (o.name === 'SF-MX30_Shimano_Freewheel') {
          o.material = mtl;
        }
        if (o.name === 'socket_head_cap_screw_is') {
          o.material = mtl;
        }
        if (o.name === 'hex_flange_nut_am') {
          o.material = mtl;
        }
        if (o.name === 'inner_battery_case') {
          o.material = mtl;
        }
        if (o.name === 'mudguard_rear_mount_2') {
          o.material = mtl;
        }
        if (o.name === 'hex_flange_nut_am') {
          o.material = mtl;
        }
        if (o.name === 'lock_nut_is') {
          o.material = mtl;
        }
      });
    }

    let ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    let dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0, 1300, 0);
    const d = 1000;
    dirLight.shadowMapHeight = 1024;
    dirLight.shadowMapWidth = 1024;
    dirLight.shadowCameraLeft = -d;
    dirLight.shadowCameraRight = d;
    dirLight.shadowCameraTop = d;
    dirLight.shadowCameraBottom = -d;
    dirLight.castShadow = true;
    scene.add(dirLight);

    let l1 = new THREE.PointLight(0xc4c4c4, 1);
    const l1helper = new THREE.CameraHelper(l1.shadow.camera);
    // scene.add(l1helper);
    l1.position.set(-100, -200, 0);
    // scene.add(l1);

    let s1 = new THREE.SpotLight(0xc4c4c4, 1);
    s1.shadowCameraLeft = 1000;
    s1.castShadow = true;
    const sphelp = new THREE.SpotLightHelper(s1);
    scene.add(sphelp);
    const s1helper = new THREE.CameraHelper(s1.shadow.camera);
    scene.add(s1helper);
    s1.position.set(700, 700, 0);
    scene.add(s1);

    let s2 = new THREE.SpotLight(0xc4c4c4, 1);
    s2.shadowCameraLeft = 1000;
    s2.castShadow = true;
    const sp2help = new THREE.SpotLightHelper(s2);
    scene.add(sp2help);
    const s12helper = new THREE.CameraHelper(s2.shadow.camera);
    scene.add(s12helper);
    s2.position.set(400, 1000, 1700);
    scene.add(s2);

    let l2 = new THREE.PointLight(0xc4c4c4, 1);
    l2.position.set(500, 100, 0);
    // scene.add(l2);

    let l3 = new THREE.PointLight(0xc4c4c4, 1);
    l3.position.set(0, 100, -500);
    // scene.add(l3);

    let l4 = new THREE.PointLight(0xc4c4c4, 1);
    l4.position.set(-500, 300, 0);
    // scene.add(l4);

    var planeGeometry = new THREE.PlaneBufferGeometry(1800, 1800, 1, 1);
    // planeGeometry.rotateX(-Math.PI / 2);
    // planeGeometry.rotateY(Math.PI / 2);
    var planeMaterial = new THREE.MeshPhongMaterial({
      color: 0xefefef,
      side: THREE.DoubleSide,
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.translateY(-500);
    plane.rotation.x = Math.PI * -0.5;
    plane.receiveShadow = true;
    function animate() {
      requestAnimationFrame(animate);
      bike.rotation.y += 0.006;

      renderer.render(scene, camera);

      controls.update();
    }

    function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  };
}
